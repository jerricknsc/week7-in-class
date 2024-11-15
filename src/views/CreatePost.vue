<script setup>
import { ref } from 'vue';
import draggable from 'vuedraggable';;

const myArray = ref([
    { name: 'jerrick', id: 0 },
    { name: 'arin', id: 1 },
    { name: 'shi hui', id: 2 },
    { name: 'regan', id: 3 },
])

const myArray2 = ref([
    { name: 'hello', id: 0 },
    { name: 'byebye', id: 1 },
    { name: 'lousy', id: 2 },
])

const oldIndex = ref('')
const newIndex = ref('')

function onEnd(event){
    console.log(event)
}

const dragOptions = ref({
    animation: 200,
    group: 'description',
    disabled: false,
    ghostClass: 'ghost',
});

const message = [
  'vue.draggable',
  'draggable',
  'component',
  'for',
  'vue.js 2.0',
  'based',
  'on',
  'Sortablejs',
];

const list = ref(
  message.map((name, index) => {
    return { name, order: index + 1 };
  })
);

</script>

<template>
    <div>        
        <h1> itinerary </h1>

        <transition-group>
            <draggable v-model="myArray" item-key="id" key="draggable" v-bind="dragOptions" class="row">
                <template #item="{element}">
                    <div :key="element.id" class="draggable-item col-4">
                        {{ element.name }}
                    </div>
                </template>
            </draggable>
        </transition-group>

        
        <br>

        <h1> shortlisted places </h1>

        <transition-group>
            <draggable item-key="name" key="dragggable" :list="list" v-bind="dragOptions">
                <template #item="{ element }">
                    <li :key="element.name" class="draggable-item2">
                        {{ element.name }}
                    </li>
                </template>
            </draggable>
        </transition-group>
    </div>
</template>

<style>

    .draggable-item {
        padding: 8px;
        margin: 4px 0;
        background-color: #f0f0f0;
        border: 1px solid #ddd;
        border-radius: 4px;
    }

    .draggable-item2 {
        padding: 8px;
        margin: 4px 0;
        background-color: #ef9a9a;
        border: 1px solid #ddd;
        border-radius: 4px;
    }
</style>