<script setup lang="ts">
const user = {
firstName: 'John',
lastName: 'Doe',
email: 'john@doe.com',

}
</script>

<template>
    <div class="has-text-right"> v-if="user">
    welcome, {{ user.firstName }} {{ user.lastName }}<br>
    

    </div>
</template>