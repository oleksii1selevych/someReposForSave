<template>
    <iframe height="100%" width="100%" :src="getFilePath"></iframe>
</template>


<script>

export default {
    props: {
        fileName: {
            type: String,
            required: true,
        },
    },
    data() {
        return {
            path: '/lib/pdfjs-2.16.105-dist/web/viewer.html'
        }
    },
    computed: {
        getFilePath() {
            if (this.fileName !== '')
                return `${this.path}?file=${this.fileName}`
            return this.path;
        }
    }
}
</script>

