<template>
    <div id="app">
        <router-view></router-view>
    </div>
</template>

<script>
import router from './router';

export default {
    data () {
        return { router };
    }
};
</script>