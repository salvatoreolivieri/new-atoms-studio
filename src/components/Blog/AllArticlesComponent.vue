<template>
  <div class="articles-wrapper">

    <!-- Componente della card dell'articolo che ciclo: -->
    <SingleArticleComponent
      class="card-article"

      v-for="(object, index) in this.articles"
      :key="index"
      :item="object" />

  </div>
</template>

<script>
import SingleArticleComponent from './SingleArticleComponent.vue';

export default {
    name: "AllArticlesComponent",
    data() {
        return {
            articles: [
                {
                    img:"https://www.craftssrl.com/wp-content/uploads/2019/12/jonathan-borba-53sewmfqlqu-unsplash-scaled.jpg",
                    date: "30 May 2019",
                    tag: "Design",
                    category: "Marketing",
                    title: "How to open a user friendly e-commerce store",
                    author: "Zerogrey Team"
                },
                {
                    img:"https://images.unsplash.com/photo-1469996933743-a1f6a78f1082?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80",
                    date: "29 May 2019",
                    category: "Marketing",
                    title: "Taking your eCommerce business international",
                    author: "Zerogrey Team"
                },
                {
                    img:"https://www.dreamtrix.com/wp-content/uploads/2021/12/cropped-cam-adams-imBSxksI7DA-unsplash-640x853.jpg",
                    date: "26 May 2019",
                    category: "Marketing",
                    title: "How to open a user friendly e-commerce store",
                    author: "Zerogrey Team"
                },
                {
                    img:"https://thumbs.dreamstime.com/b/farmers-market-fruits-vegetables-crates-47300154.jpg",
                    date: "02 May 2019",
                    category: "Marketing",
                    title: "How to open a user friendly e-commerce store",
                    author: "Zerogrey Team"
                },
            ],
        };
    },
    mounted() {

    },

    components: { SingleArticleComponent }
}
</script>

<style lang="scss" scoped>

.articles-wrapper{
  display: flex;
  overflow: scroll;

  margin-left: -45px;
  margin-right: 15px;
}

</style>