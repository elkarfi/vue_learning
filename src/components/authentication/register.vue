<template>
  <div class="w-full flex flex-wrap">
    <!-- Login Section -->
    <div class="w-full md:w-1/2 flex flex-col">
      <AuthSection />

      <div
        class="flex flex-col justify-center md:justify-start my-auto pt-8 md:pt-0 px-8 md:px-24 lg:px-32"
      >
        <p class="text-center text-3xl">Join Us.</p>

        <form class="flex flex-col pt-3 md:pt-8" onsubmit="event.preventDefault();">
          <FormInput v-model="state.Name" label="Name" inputIdentifier="name" inputType="text" />

          <FormInput
            v-model="state.contact.email"
            label="Email"
            inputIdentifier="email"
            inputType="email"
          />

          <span v-if="v$.contact.email.$error">{{ v$.contact.email.$errors[0].$message }}</span>

          <FormInput
            v-model="state.password"
            label="Password"
            inputIdentifier="password"
            inputType="password"
          />

          <FormInput
            v-model="state.confirmPassword"
            label="Confirm Password"
            inputIdentifier="confirm-password"
            inputType="password"
          />

          <Button title="Register" type="submit" @click="submitForm" />
        </form>

        <div class="text-center pt-12 pb-12">
          <p>Already have an account?<router-link to="/login"> login </router-link></p>
        </div>
      </div>
    </div>

    <!-- Image Section -->
    <ImageSection />
  </div>
</template>

<script setup >
import ImageSection from '../shared/ImageSection.vue'
import AuthSection from '../shared/AuthSection.vue'
import FormInput from '../reusable/FormInput.vue'
import Button from '../reusable/Button.vue'
import { computed, reactive } from 'vue'
import { useVuelidate } from '@vuelidate/core'
import { required, email, minLength, sameAs } from '@vuelidate/validators'


 
    const state = reactive({
      Name: '',
      contact: {
        email: ''
      },
      password: '',
      confirmPassword: ''
    })

    const rules = computed( ()=> { return   {

      Name: { required },
      contact: {
        email: { required, email },
      },
      password: { required, minLength: minLength(6) },

      confirmPassword: { required, sameAsPassword: sameAs(state.password) },

    };  });
    
  

    const v$ = useVuelidate(rules, state)

    const submitForm = async () => {
      const result = await v$.value.$validate()

      if (result) {

        alert('success');

      } else {

        alert('error');


      }

  }

</script>
