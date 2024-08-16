
    <template>
    <div class="notification-icon">
      <img :src="iconSrc" />
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';

  import alertIcon from '@/assets/img/Icons/alertIcon.svg';
  import infoIcon from '@/assets/img/Icons/infoIcon.svg';
  import greetingIcon from '@/assets/img/Icons/greetingIcon.svg';

  export default defineComponent({
    name: 'NotificationIcon',
    props: {
      icon: {
        type: String,
        required: true,
        validator: (value: string): boolean => {
          const validValues = [
          'alertIcon',
          'infoIcon',
          'greetingIcon',
          ];
          return validValues.includes(value);
        },
      },
    },
    computed: {
    iconSrc(): string {
      switch(this.icon) {
        case 'alertIcon':
          return alertIcon;

        case 'infoIcon':
          return infoIcon;

        case 'greetingIcon':
          return greetingIcon;

        default: 
          return ''
      }
      

    },
    },
  });
  </script>