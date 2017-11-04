import fs from 'fs'
import nun from 'nunjucks'
import path from 'path'

export function loadTemplate() {
	const template = path.join(__dirname, '..', TEMPLATE_PATH, 'deployment.yml.template')
	const DEPLOYMENT_TEMPLATE = fs.readFileSync(template, 'utf8')
}

export function renderTemplate(template: string, config) {
	const file = nun.renderString(DEPLOYMENT_TEMPLATE, config)
}
