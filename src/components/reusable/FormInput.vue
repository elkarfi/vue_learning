<script setup>
 
   const props =  defineProps({

		label: {
			type: String,
			default: '',
		},
		inputIdentifier: {
			type: String,
			default: '',
		},
		modelValue: {
			type: [String, Number],
			default: '',
		},
		inputType: {
			type: String,
			default: 'text',
		},

	},
   )

</script>



<template>
	<div class="flex flex-col pt-4">
		<label
			class="text-lg"
			:for="label"
			>{{ label }}</label
		>
		<input
			class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline"
			:id="inputIdentifier"
			:name="inputIdentifier"
			:placeholder="label"
			:aria-label="inputIdentifier"
			:value="modelValue"
			:type="inputType"
			v-bind="$attrs"
			@input="$emit('update:modelValue', $event.target.value)"
		/>




	</div>
</template>

