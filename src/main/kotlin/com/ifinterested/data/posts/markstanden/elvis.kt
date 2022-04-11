package com.ifinterested.data.posts.markstanden

import com.ifinterested.data.authors.markStanden
import com.ifinterested.models.BlogPost
import com.ifinterested.models.Date
import com.ifinterested.models.PostElement
import com.ifinterested.models.ValidPostElement

val elvis =
    BlogPost.create(title = "Kotlin's Elvis Operator ?:", body = listOf(PostElement(ValidPostElement.SUMMARY,
                                                                                    "Kotlin's Elvis operator gets a fair bit of press and searching - but what is it, and why is it useful?"),
                                                                        PostElement(ValidPostElement.SUBTITLE, "TL:DR"),
                                                                        PostElement(ValidPostElement.TLDR,
                                                                                    "The elvis operator ?: is Kotlin's null-coalescing operator, removing the need for explicit null checks, particularly useful when combined with Kotlin's other null-safety operators."),
                                                                        PostElement(ValidPostElement.SUBTITLE,
                                                                                    "Null-coalescing operator"),
                                                                        PostElement(ValidPostElement.PARAGRAPH,
                                                                                    "The Null-coalescing operator reduces the code required to provide an alternate value for a potentially null variable."),
                                                                        PostElement(ValidPostElement.PARAGRAPH,
                                                                                    "In the code below, we check for an unset (null) product ID and assign a value of zero if unset using an if expression:"),
                                                                        PostElement(ValidPostElement.CODE,
                                                                                    "val foundProduct = getProduct(searchTerm)\nval assetID: Int = if (foundProduct.id != null) foundProduct.id else 0"),
                                                                        PostElement(ValidPostElement.PARAGRAPH,
                                                                                    "We can reduce the quantity of code even further using the elvis operator:"),
                                                                        PostElement(ValidPostElement.CODE,
                                                                                    "val foundProduct = getProduct(searchTerm)\nval assetID: Int = foundProduct.id ?: 0"),
                                                                        PostElement(ValidPostElement.PARAGRAPH,
                                                                                    "This will assign the value of foundProduct.id to assetID unless it is null, in which case, it assigns the value 0."),
                                                                        PostElement(ValidPostElement.SUBTITLE,
                                                                                    "Why Elvis?"),
                                                                        PostElement(ValidPostElement.PARAGRAPH,
                                                                                    "The Elvis operator, rotated, looks like the king's trademark quiff and eyes.  It's a bit of a stretch, but it's a cool name for a smooth operator."),
                                                                        PostElement(ValidPostElement.IMAGE,
                                                                                    "/images/mug.svg")),
                    authorID = markStanden.authorID, date = Date(2022, 4, 9))