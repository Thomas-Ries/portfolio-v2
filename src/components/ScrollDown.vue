<template>
    <div class="scroll-down animate-bounce"></div>
</template>



<style>
.scroll-down {
    height: 5rem;
    Width: 3rem;
    border: 3px solid #FFF;
    position: absolute;
    transform: translate(-50%);
    top: 90%;
    border-radius: 50px;
    z-index: 26;    
}

.scroll-down::before,
.scroll-down::after {
    content: '';
    position: absolute;
    top: 45%;
    left: 50%;
    border: 2px solid #FFF;
    height: 1rem;
    width: 1rem;
    transform: translate(-50%, -100%) rotate(45deg);
    border-top: transparent;
    border-left: transparent;
}

.scroll-down::after {
    top: 60%;
}
</style>