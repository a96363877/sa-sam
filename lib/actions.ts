

export const playNotificationSound = () => {
    const audio=new Audio('/bbs.mp3')
    if (audio) {
      audio!.play().catch((error) => {
        console.error('Failed to play sound:', error);
      });
    }
  };