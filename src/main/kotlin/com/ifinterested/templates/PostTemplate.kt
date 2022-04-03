package com.ifinterested.templates

import io.ktor.server.html.*
import kotlinx.html.ARTICLE
import kotlinx.html.FlowContent
import kotlinx.html.SECTION
import kotlinx.html.h2
import kotlinx.html.section

class PostTemplate : Template<ARTICLE> {
    val postTitle = Placeholder<FlowContent>()
    val postBody = PlaceholderList<SECTION, FlowContent>()

    override fun ARTICLE.apply() {
        section("title-section") {
            h2(classes = "post-title") {
                insert(postTitle)
            }
        }
        section(classes = "post-body") {
            each(postBody) {
                insert(it)
            }
        }
    }
}