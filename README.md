# vue-toast-csx

A mobile toast plugin for vue.

## Introduction

A mobile toast plugin for vue.

## Useage

It's simple.

```javascript

//first import plugin

import VueToast    from 'vue-toast-csx'

//and register the plugin on vue.

Vue.use(VueToast)

//last , you can call it .

this.$toast.show("hello,toast")

or

this.$toast.show("hello,toast",{
  duration:3000
})

or

this.$toast.show("hello,toast",function(){
    //to-do 
})

```
