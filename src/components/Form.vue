// Form.vue
<template>
<div class="form">
    <div class="d-flex flex-row">
       <v-text-field
            type="email"
            label="Channel Members Emails"
            variant="underlined"
            class="form__input"
            v-model="email"
            :error-messages="errorMessage"
          ></v-text-field>
          <v-btn :disabled="isValid" density="compact" icon="mdi-plus" variant="text" size="large" @click="addEmail"></v-btn>
          </div>
<div class="emails-container d-flex"><div v-for="(email, index) in this.emails" :key="index"><v-chip variant="outlined">{{ email}}<v-btn class="close-btn" variant="plain" icon="mdi-close" @click="removeEmail(index)"></v-btn></v-chip></div></div>
</div>
</template>

<script lang="ts">
import { reactive, computed} from 'vue';

export default {
  name: 'txt',
  props: {
    label: {
      type: String,
      default: 'Button',
      required: true,
    },
    size: {
      type: Number,
      default: 14,
    },
    errorState: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
        emails: [],
        email: '',
        errorMessage: '',
        disabled: false,
    }
  },
  methods: {
    addEmail() {
        this.emails.push(this.email)
        this.email = '';
    },
    removeEmail(index) {
        this.emails.splice(index, 1)
    },
    validateEmail(email) {
      const validated = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
      if (validated) {
        this.disabled = true;
        this.errorMessage= ''
      } else {
        if (this.email.length) {
          this.errorMessage = 'Must be a valid e-mail.'
        }
      }
    },
  },
  watch: {
      email(value) {
        this.email = value;
        this.validateEmail(value)
      }
  },
  computed: {
    isValid() {
      return !this.disabled;
    }
  },
  setup(props: any) {
    props = reactive(props);
    return {
      style: computed(() => ({
        fontSize: `${props.size}px`,
      }))
    }
  },
};
</script>

<style scoped lang="scss">
 .form {
    width: 100%;
    padding: 10px;

    .v-btn {
        align-self: center;
        font-size: 20px;
        margin: 24px;
        color: #33691E;
    }

    .close-btn {
      margin: 0px;
       align-self: end;
      color: #112E45;
      font-size: 12px;
      width:32px;
      height:32px;
    }

    .v-chip{
      color: #112E45;
      margin-right: 8px;
      padding-right: 0px;
    }

    .v-messages {
      display: none !important;
    }
}
</style>