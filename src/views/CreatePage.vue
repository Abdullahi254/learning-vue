<template>
    <div class="container">
        <form>
            <div class="row">
                <div class="col">
                    <div class="form-group mb-3 mt-3">
                        <label for="pageTitle">Page Title</label>
                        <input type="text" class="form-control" id="pageTitle" aria-describedby="pageTitle"
                            placeholder="Page Title" v-model="pageTitle">
                    </div>
                    <div class="form-group mb-3">
                        <label for="content">Content</label>
                        <textarea class="form-control" id="content" rows="4" v-model="content">
                            </textarea>
                    </div>
                </div>

                <div class="col-sm-4">
                    <div class="form-group mb-3 mt-3">
                        <label for="linkText">Link Text</label>
                        <input type="text" class="form-control" id="linkText" aria-describedby="linkText"
                            v-model="linkText">
                    </div>
                    <div class="form-group mb-3 mt-3">
                        <label for="linkUrl">Link Url</label>
                        <input type="text" class="form-control" id="linkUrl" aria-describedby="linkUrl"
                            v-model="linkUrl">
                    </div>

                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"
                            v-model="published">
                        <label class="form-check-label" for="flexCheckDefault">
                            Published
                        </label>
                    </div>
                </div>
            </div>

            <button type="submit" class="btn btn-primary" :disabled="disableSubmit"
                @click.prevent="handleForm">Submit</button>
        </form>
    </div>
</template>

<script>

export default {
    emits: {
        createPage({ pageTitle, content, linkText, linkUrl }) {
            if (!pageTitle) {
                return false
            }
            if (!content) {
                return false
            }
            if (!linkText) {
                return false
            }
            if (!linkUrl) {
                return false
            }
            return true
        }
    },
    data() {
        return {
            pageTitle: '',
            content: '',
            linkText: '',
            linkUrl: '',
            published: true
        }
    },
    computed: {
        disableSubmit() {
            if (this.pageTitle.length < 1 || this.content.length < 1 || this.linkText.length < 1 || this.linkUrl.length < 1) {
                return true
            }
            return false
        },
        clearInputs() {
            return () => {
                this.pageTitle = ''
                this.content = ''
                this.linkText = ''
                this.linkUrl = ''
                this.published = false
            }

        },


    },
    watch: {
        pageTitle(newTitle, oldTitle) {
            if (this.linkText === oldTitle) {
                this.linkText = newTitle
            }
        }
    },
    methods: {
        handleForm() {
            this.$emit("createPage", {
                pageTitle: this.pageTitle,
                content: this.content,
                linkText: this.linkText,
                linkUrl: this.linkUrl,
                published: this.published
            })
            // this.handleSubmit(
            //     this.pageTitle, this.content, this.linkText, this.linkUrl, this.published
            // )
            this.clearInputs()
        }
    }
}

</script>