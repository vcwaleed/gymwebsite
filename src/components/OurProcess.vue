<script setup>
import { ref } from 'vue';

// Define the process steps with icons
const processSteps = ref([
    { name: "Analyze Your Goal", icon: "📊" },
    { name: "Work Hard", icon: "💪" },
    { name: "Improve", icon: "📈" },
    { name: "Achieve", icon: "🏆" }
]);
</script>

<template>
    <section class="main">
        <h1>Our Process</h1>
        <div class="process_container">
            <div v-for="(step, index) in processSteps" :key="index" class="process_card">
                <div class="icon">{{ step.icon }}</div>
                <span>{{ step.name }}</span>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
@use "sass:color";
@use '../styles/variables' as *;
@use '../styles/mixins' as *;

.main {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 60px;

    h1 { 
        font-size: 40px;
        color: $text-color;
        margin-bottom: 20px;
    }

    .process_container {
        display: flex;
        gap: 40px;
        flex-wrap: wrap;
        
    }

    .process_card {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        border-radius: 10px;
        padding: 60px;
        width: 140px;
        height: 110px;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        transition: transform 0.3s ease-in-out;
        &:hover {
            transform: translateY(-5px);
        }

        .icon {
            background-color: gray;
            padding: 20px;
            font-size: 40px;
            border-radius: 60px;
            margin-bottom: 10px;
            &:hover {
                background-color: $card_bg;
        }
        }

        span {
            font-size: 16px;
            font-weight: bold;
            color: $text-color;
        }
    }
}
</style>
