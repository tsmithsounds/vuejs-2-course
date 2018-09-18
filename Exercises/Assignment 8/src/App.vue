<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12">
                <br>
                <button @click="selectedComponent = 'appBlue'" class="btn btn-primary">Load Blue Template</button>
                <button @click="selectedComponent = 'appGreen'" class="btn btn-success">Load Green Template</button>
                <button @click="selectedComponent = 'appRed'" class="btn btn-danger">Load Red Template</button>
                <hr>
                <component :is="selectedComponent">
                  <h2>This is the content</h2>
                </component>
                <!-- <app-blue>
                  <h2>Blue Component</h2>
                </app-blue>
                <app-green>
                  <h2>Green Component</h2>
                </app-green>
                <app-red>
                  <h2>Red Component</h2>
                </app-red> -->
            </div>
        </div>
    </div>
</template>

<script>
    import Blue from './components/Blue.vue';
    import Green from './components/Green.vue';
    import Red from './components/Red.vue';

    export default {
      data: function() {
        return {
            selectedComponent: 'appBlue'
        }
      },
        components: {
            appBlue: Blue,
            appGreen: Green,
            appRed: Red
        }
    }
</script>

<style>
</style>
