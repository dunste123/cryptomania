<template>
    <div v-if="articles.length">
        <b-card-group columns>
            <b-card
                    v-for="(article, i) in articles"
                    :key="i"
                    :title="article.title"
                    :img-src="article.thumbnail"
                    img-alt="Image"
                    img-top
                    tag="article"
                    style="max-width: 20rem;"
                    class="mb-2"
            >
                <span v-for="(c, i) in article.coins"
                      :key="i"
                      class="badge badge-secondary"
                      style="margin-right: 2px;"
                >{{ c.name }}</span>

                <b-card-text>
                    {{ article.description }}
                </b-card-text>

                <b-button :href="article.url" target="_blank" variant="primary">View article</b-button>
            </b-card>
        </b-card-group>
    </div>
    <Loader v-else/>
</template>

<script>
    import CryptoNewsApi from 'crypto-news-api';
    import Loader from './Loader';

    // eslint-disable-next-line no-undef
    const newsApi = new CryptoNewsApi(process.env.VUE_APP_NEWS_KEY);

    export default {
        name: 'CryptoNews',
        components: {
            Loader
        },
        data: () => ({
            articles: [],
        }),
        mounted() {
            newsApi.getTopNews('en')
                .then((articles) => {
                    this.articles = articles;
                })
                .catch((error) => {
                    console.log(error);
                });
        }
    };
</script>

<style scoped>

</style>
