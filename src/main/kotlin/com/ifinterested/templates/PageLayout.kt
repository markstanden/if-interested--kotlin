package com.ifinterested.templates

import io.ktor.server.html.*
import kotlinx.html.HTML
import kotlinx.html.body

class PageLayout() : Template<HTML> {
    val blogPost = TemplatePlaceholder<PostTemplate>()

    override fun HTML.apply() {
        body {
            insert(PostTemplate(), blogPost)
        }
    }
}