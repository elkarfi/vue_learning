<template>
  <div class="w-full flex flex-wrap">
    <!-- Login Section -->
    <div class="w-full md:w-1/2 flex flex-col">
      <AuthSection />

      <div
        class="flex flex-col justify-center md:justify-start my-auto pt-8 md:pt-0 px-8 md:px-24 lg:px-32"
      >
        <p class="text-center text-3xl">Welcome.</p>
        <form class="flex flex-col pt-3 md:pt-8" onsubmit="event.preventDefault();">


          <FormInput label="Email" inputIdentifier="email" inputType="email" />

          <FormInput label="Password" inputIdentifier="password" inputType="password" />

          <Button title="Log In" type="submit" />


        </form>
        <div class="text-center pt-12 pb-12">
          <p>Don't have an account?<router-link to="/"> register </router-link></p>
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

</script>
