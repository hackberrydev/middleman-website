# frozen_string_literal: true

module CustomHelpers
  def contact_link(text)
    link_to text, "mailto:strika@hackberry.dev"
  end

  def code_block(language, &block)
    code = capture_html(&block)

    highlighted_code = Middleman::Syntax::Highlighter.highlight(
      code, language, {}
    ).html_safe

    concat_content content_tag(
      :div, highlighted_code, :class => "not-prose my-5"
    )
  end
end
