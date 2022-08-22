import { bounceOutLeftAnimation, fadeInAnimation } from './../../animations';
import {
  trigger,
  style,
  transition,
  animate,
  useAnimation,
  query,
  animateChild,
  group,
  stagger,
} from '@angular/animations';

export const todoAnimation = [
    trigger('todosAnimation', [
      transition(':enter', [
        group([
          query('h1', [
            style({
              transform: 'translateY(-20px)',
            }),
            animate(1000),
          ]),

          query('@todoItemAnimation', stagger(500, animateChild())),
        ]),
      ]),
    ]),

    trigger('todoItemAnimation', [
      transition(':enter', [useAnimation(fadeInAnimation)]),

      transition(':leave', [
        style({ backgroundColor: 'red', color: 'white' }),
        animate(1000),
        useAnimation(bounceOutLeftAnimation),
      ]),
    ]),
  ]