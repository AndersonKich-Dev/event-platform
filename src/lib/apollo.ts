import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
    uri: 'https://api-sa-east-1.graphcms.com/v2/cl4pudd0u2ddj01xscq7w1kgz/master',
    cache: new InMemoryCache()
})