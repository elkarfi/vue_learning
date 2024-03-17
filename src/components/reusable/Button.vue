<script setup >

const props =  defineProps({

	title: {
	type: String,
	default: '',
}

},
)

</script>

<template>
	<button class="bg-black text-white font-bold text-lg hover:bg-gray-700 p-2 mt-8">{{ title }}</button>
</template>