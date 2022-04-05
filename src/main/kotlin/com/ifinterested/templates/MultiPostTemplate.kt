package com.ifinterested.templates

import com.ifinterested.models.BlogPost
import com.ifinterested.models.ValidPostElement
import io.ktor.server.html.*
import kotlinx.html.FlowContent
import kotlinx.html.a
import kotlinx.html.article
import kotlinx.html.classes
import kotlinx.html.h2
import kotlinx.html.hr
import kotlinx.html.p
import kotlinx.html.pre
import kotlinx.html.section
import kotlinx.html.title

class MultiPostTemplate(val posts: List<BlogPost>) : Template<FlowContent> {
    override fun FlowContent.apply() {
        section {
            title = "blogposts"
            posts.forEach() {
                article {
                    title = "${it.title}"
                    section("title-section") {
                        title = "post title"
                        h2(classes = "post-title") {
                            +it.title
                        }
                        a {
                            href = "/posts/${it.asURL()}"
                            +it.asURL()
                        }
                    }
                    section(classes = "post-body") {
                        title = "post content"
                        it.body.forEach {
                            when (it.type) {
                                ValidPostElement.CODE -> pre(classes = "post-element post-element--code") {
                                    title = "code block"
                                    +it.content }
                                ValidPostElement.PARAGRAPH -> p(classes = "post-element post-element--text") {
                                    title = "text section"
                                    +it.content }
                            }
                        }
                    }

                }
                hr { }
            }
        }
    }
}