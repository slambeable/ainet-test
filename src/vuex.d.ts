import { Store } from 'vuex';
import UsersInterface from '@/types/UsersInterface';

declare module '@vue/runtime-core' {
  interface State {
    users: UsersInterface,
  }

  interface ComponentCustomProperties {
    $store: Store<State>,
  }
}
