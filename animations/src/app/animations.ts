import {
  trigger,
  state,
  style,
  transition,
  animate,
  keyframes,
  animation,
  useAnimation,
} from '@angular/animations';

export const bounceOutLeftAnimation = animation(
  animate(
    500, // * = >void   ______ alias is :leave
    keyframes([
      style({
        offset: 0.2,
        transform: 'translateX(20px)',
      }),
      style({
        offset: 1,
        transform: 'translateX(-100%)',
      }),
    ])
  )
);

export const fadeInAnimation = animation([style({ opacity: 0 }), animate('{{ duration }} {{ easing}}')], {
    params: {
        duration: '2s',
        easing: 'ease-out'
    }
})

export const fadeOutAnimation = animation([style({ opacity: 1 }), animate(2000)])

export const fadeInOutAnimationTrigger = trigger('fade', [
  transition(':enter', useAnimation(fadeOutAnimation)),
  transition(':leave', useAnimation(fadeOutAnimation)),
]);

export const slideAnimationTrigger = trigger('slide', [
  state(
    'void',
    style({
      transform: 'translateX(-20px)',
    })
  ),
  transition('void => *', [animate('500 ease-in')]), // void => * ______ alias is :enter
  transition('* => void', useAnimation(bounceOutLeftAnimation)),
]);
