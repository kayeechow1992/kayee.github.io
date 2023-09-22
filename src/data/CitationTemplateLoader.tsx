import templates from "../../public/assets/citation_template.json"

const Cite = require("citation-js")

// TODO: Copy or download option for users to export citations
export const availableCitationStyles = Object.keys(templates).push("apa", "vancouver", "harvard1")
export const defaultCitationStyle = "chicago-fullnote"

export class CitationTemplateLoader {
  static loadTemplates() {
    const config = Cite.plugins.config.get("@csl")
    Object.entries(templates).forEach(([templateName, template]) => {
      config.templates.add(templateName, template)
    })
  }
}