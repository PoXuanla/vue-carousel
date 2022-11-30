import { computed, ref, watch, type Ref } from "vue";

export default (items) => {
  /**切換輪播的動畫時間 */
  const transition = ref("all .3s");
  /**當前輪播 Item 的索引 */
  const currentIndex: Ref<number> = ref(1);
  /**每次切換輪播的距離 */
  const translateX = ref(200);
  /**是否可以切換下一個輪播 */
  const canNextSwitch = ref(true);
  /**當前切換輪播移動的距離 */
  const currentTranslateX: Ref<Number> = ref(-200);
  /**當前是否能夠進行自動播放 */
  const canAutoSwitchNow = ref(true);
  /**開始自動播放的 TimeOut*/
  const autoSwitchStartTimer: Ref<any> = ref(null);
  /**自動播放的時間間隔 Interval */
  const autoSwitchInterval: Ref<any> = ref(null);

  const containerStyle = computed(() => {
    return {
      transition: transition.value,
      transform: `translateX(${currentTranslateX.value}px)`,
    };
  });
  const carouselItems = computed(() => {
    const propsItems = items;
    const itemsLastIndex = propsItems.length - 1;
    return [propsItems[itemsLastIndex], ...propsItems, propsItems[0]];
  });

  /**
   * 切換至前一張圖片
   */
  const onPref = () => {
    if (!canNextSwitch.value) return;
    currentIndex.value = currentIndex.value - 1;
    waitingNextSwitch(300);
    autoSwitchAfterStopAction(3000);
  };
  /**
   * 切換至後一張圖片
   */
  const onNext = () => {
    if (!canNextSwitch.value) return;
    currentIndex.value = currentIndex.value + 1;
    waitingNextSwitch(300);
    autoSwitchAfterStopAction(3000);
  };
  /**
   * 動畫時間結束才能再次切換輪播圖片
   * @param {number} animationTime
   */
  const waitingNextSwitch = (animationTime: number) => {
    canNextSwitch.value = false;

    setTimeout(() => {
      canNextSwitch.value = true;
    }, animationTime);
  };
  /**
   * 當輪播至頭尾就重新開始
   * @param translateX 準切換的 item location
   * @param newIndex 準切換的 item index
   */
  const restartByHeadAndTail = (newTranslateX: number, newIndex: number) => {
    setTimeout(() => {
      transition.value = "none";
      currentTranslateX.value = newTranslateX;
      currentIndex.value = newIndex;
    }, 300);
  };

  /**
   * n 秒後若無動作就會自動輪播
   * @param {number} millisecond
   */
  const autoSwitchAfterStopAction = (millisecond: number) => {
    canAutoSwitchNow.value = false;
    clearTimeout(autoSwitchStartTimer.value);
    autoSwitchStartTimer.value = setTimeout(() => {
      canAutoSwitchNow.value = true;
    }, millisecond);
  };
  watch(
    () => currentIndex.value,
    () => {
      if (currentIndex.value === 0) {
        const newIndex = carouselItems.value.length - 2;
        const newTranslateX = -1 * newIndex * translateX.value;
        restartByHeadAndTail(newTranslateX, newIndex);
        transition.value = "all .3s";
      }
      if (currentIndex.value === carouselItems.value.length - 1) {
        restartByHeadAndTail(0, 1);
        transition.value = "all .3s";
      }
      if (
        currentIndex.value === 2 ||
        currentIndex.value === carouselItems.value.length - 3
      ) {
        transition.value = "all .3s";
      }
      currentTranslateX.value = -currentIndex.value * translateX.value;
    }
  );
  /**
   * 控制自動輪播
   */
  watch(
    () => canAutoSwitchNow.value,
    () => {
      if (!canAutoSwitchNow.value) {
        clearInterval(autoSwitchInterval.value);
        return;
      }
      autoSwitchInterval.value = setInterval(() => {
        currentIndex.value = currentIndex.value + 1;
      }, 1000);
    },
    { immediate: true }
  );

  return { onPref, onNext, containerStyle, carouselItems };
};
