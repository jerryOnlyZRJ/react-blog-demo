import React from 'react'

import Layout from '../../container/layout/Layout'
import ArticleContent from '../../components/ArticleContent'

import './Article.less'

export default class Article extends React.Component{
    constructor(props){
        super(props);
        this.state = {

        }
    }

    render(){
        return(
            <Layout>
                <ArticleContent />
            </Layout>
        )
    }
}