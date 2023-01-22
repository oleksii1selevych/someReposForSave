<template>

    <base-card>
        <div class="content-wrapper">
            <div class="action-wrapper">
                <base-button v-if="!anyFileIsShown"  @click="openFile(taskFileName)" mode="outline">Переляд завдання</base-button>
                <base-button v-if="anyFileIsShown" @click="hideFile" mode="outline">Повернутись</base-button>
                <base-button v-if="!anyFileIsShown"  @click="openFile(reportFileName)" mode="outline">Перегляд звіту</base-button>
            </div>
            <div v-if="anyFileIsShown" class="pdf-wrapper">
                <PDFJSViewer :file-name="currentFileName" />
            </div>
            <div v-if="!anyFileIsShown" class="main-content">
                <slot />
            </div>
        </div>
    </base-card>
</template>



<script>

import PDFJSViewer from '../other/PDFJSViewer.vue'

export default {
    components: { PDFJSViewer },
    props:{
        reportFileName: {
            type:String,
            required:true
        },
        taskFileName: {
            type:String,
            required:true
        }
    },
    data(){
        return {
            anyFileIsShown:false,
            currentFileName:''
        }
    },
    computed:{
        backButtonIsShown(){
            return this.isReportOpened || this.isTaskOpened 
        }
    },
    methods:{
        openFile(fileName){
            this.anyFileIsShown = true,
            this.currentFileName = fileName
        },
        hideFile(){
            this.anyFileIsShown = false;
        }
    }
}

</script>



<style scoped>

.action-wrapper {
     display: flex;
     justify-content: space-between;
     margin-bottom: 2rem;
}

.pdf-wrapper {
     height: 79vh;
     min-width: 50vh;
}
</style>