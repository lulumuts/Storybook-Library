import Button from '../components/Atoms/Button.vue';

export default {
  title: 'Button',
  component: {Button},
  argTypes: {
    label: 'String',
    backgroundColor: { control: 'color' },
  },
};
export const StandardButton = {
    args: {
        label: 'Login',
        isStandardBtn: true,
    },
    render: (args) => ({
        components: { Button },
        setup() {
            return { args };
        },
        template: '<Button v-bind="args" />',
    }),
};

export const AuthButton = {
    args: {
        label: 'Login',
        isAuthBtn: true,
    },
    render: (args) => ({
        components: { Button },
        setup() {
            return { args };
        },
        template: '<Button v-bind="args" />',
    }),
};

export const FormButton = {
    args: {
        ...AuthButton.args,
        label: 'Submit',
        isFormBtn: true,
        isAuthBtn: false,
    },
    render: (args) => ({
        components: { Button },
        setup() {
            return { args };
        },
        template: '<Button v-bind="args" />',
    }),
};

export const ModalButton = {
    args: {
        ...AuthButton.args,
        label: 'Submit',
        isModalBtn: true,
        isFormBtn: false,
        isAuthBtn: false,
    },
    render: (args) => ({
        components: { Button },
        setup() {
            return { args };
        },
        template: '<Button v-bind="args" />',
    }),
};

export const TextButton = {
    args: {
        ...AuthButton.args,
        label: 'Register new Dataset',
        isTextBtn: true,
        isModalBtn: false,
        isFormBtn: false,
        isAuthBtn: false,
    },
    render: (args) => ({
        components: { Button },
        setup() {
            return { args };
        },
        template: '<Button v-bind="args" />',
    }),
};
