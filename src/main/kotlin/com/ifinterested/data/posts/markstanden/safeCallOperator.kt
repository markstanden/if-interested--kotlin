package com.ifinterested.data.posts.markstanden

import com.ifinterested.data.authors.markStanden
import com.ifinterested.models.BlogPost
import com.ifinterested.models.Date
import com.ifinterested.models.PostElement
import com.ifinterested.models.ValidPostElement

val safeCallOperator =
    BlogPost.create(title = "Kotlin's Safe Call Operator ?.", body = listOf(PostElement(ValidPostElement.SUMMARY,
                                                                                    "Kotlin's safe call operator allows inline null checking and"),
                                                                        PostElement(ValidPostElement.SUBTITLE, "TL:DR"),
                                                                        PostElement(ValidPostElement.TLDR,
                                                                                    ""),
                                                                        PostElement(ValidPostElement.SUBTITLE,
                                                                                    "Safe Call Operator"),
                                                                        PostElement(ValidPostElement.PARAGRAPH,
                                                                                    ""),
                                                                        PostElement(ValidPostElement.PARAGRAPH,
                                                                                    ""),
                                                                        PostElement(ValidPostElement.CODE,
                                                                                    ""),
                                                                        PostElement(ValidPostElement.PARAGRAPH,
                                                                                    ""),
                                                                        PostElement(ValidPostElement.CODE,
                                                                                    ""),
                                                                        PostElement(ValidPostElement.PARAGRAPH,
                                                                                    ""),
                                                                        PostElement(ValidPostElement.SUBTITLE,
                                                                                    ""),
                                                                        PostElement(ValidPostElement.PARAGRAPH,
                                                                                    ""),
                                                                        PostElement(ValidPostElement.IMAGE,
                                                                                    "/images/mug.svg")),
                    authorID = markStanden.authorID, date = Date(2022, 4, 11))