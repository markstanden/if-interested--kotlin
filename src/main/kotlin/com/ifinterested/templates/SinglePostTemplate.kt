package com.ifinterested.templates

import com.ifinterested.models.BlogPost
import com.ifinterested.models.ValidPostElement
import io.ktor.server.html.*
import kotlinx.html.FlowContent
import kotlinx.html.article
import kotlinx.html.classes
import kotlinx.html.code
import kotlinx.html.h2
import kotlinx.html.img
import kotlinx.html.p
import kotlinx.html.pre
import kotlinx.html.section
import kotlinx.html.title

class SinglePostTemplate(val posts: List<BlogPost>) : Template<FlowContent> {
//    val postTitle = Placeholder<FlowContent>()
//    val postBody = PlaceholderList<SECTION, FlowContent>()
    override fun FlowContent.apply() {
        article {
            classes = setOf("post-wrapper")
            posts.first().also {
                section("title-section") {
                    h2(classes = "post-title") {
                        +it.title
                    }
                }
                section(classes = "post-body") {
                    title = "post content"
                    it.body.forEach {
                        when (it.type) {
                            ValidPostElement.CODE -> pre(classes = "post-element post-element--code") {
                                code {
                                    title = "code block"
                                    +it.content
                                }
                            }
                            ValidPostElement.PARAGRAPH -> p(classes = "post-element post-element--text") {
                                title = "text block"
                                +it.content
                            }
                            ValidPostElement.TLDR -> p(classes = "post-element post-element--text") {
                                title = "tldr block"
                                +it.content
                            }
                            ValidPostElement.SUMMARY -> p(classes = "post-element post-element--text") {
                                title = "summary block"
                                +it.content
                            }
                            ValidPostElement.IMAGE -> img(classes = "post-element post-element--image") {
                                title = "image block"
                                src = it.content
                            }
                        }
                    }
                }
            }
        }
    }
}