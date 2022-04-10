package com.ifinterested.models

data class PostElement(val type: ValidPostElement, val content: String)

enum class ValidPostElement { CODE, IMAGE, PARAGRAPH, SUBTITLE, SUMMARY, TLDR }