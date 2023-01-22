<template>
    <div class="row">
        <div class="col">
            <base-button @click="download('/public/documents/task2.pdf', 'task2.pdf')" mode="flat">Завантажити вихідний файл для підпису</base-button>
        </div>
        <div class="col">
            <base-button @click="download('/public/documents/task2Detached.p7s', 'task2Detached.p7s')" mode="flat">Завантажити підписанний файл (detached)</base-button>
        </div>
        <div class="col">
            <base-button @click="download('/public/documents/task2Enveloped.p7s', 'task2Enveloped.p7s')" mode="flat">Завантажити підписанний файл (enveloped)</base-button>
        </div>
    </div>
</template>



<script>

export default {
    methods:{
        download(path, fileName) {
            const link = document.createElement("a");
            link.href = path;
            link.download = fileName;
            link.click();
        }
    }
}

</script>