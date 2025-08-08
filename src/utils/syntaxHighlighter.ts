import Prism from 'prismjs';

// Import language components
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-typescript';
import 'prismjs/components/prism-jsx';
import 'prismjs/components/prism-tsx';
import 'prismjs/components/prism-css';
import 'prismjs/components/prism-json';
import 'prismjs/components/prism-bash';
import 'prismjs/components/prism-markdown';

export interface HighlightOptions {
  language: string;
  showLineNumbers?: boolean;
  highlightLines?: number[];
}

export class SyntaxHighlighter {
  private static languageMap: Record<string, string> = {
    'javascript': 'javascript',
    'js': 'javascript',
    'typescript': 'typescript',
    'ts': 'typescript',
    'jsx': 'jsx',
    'tsx': 'tsx',
    'css': 'css',
    'json': 'json',
    'html': 'markup',
    'xml': 'markup',
    'bash': 'bash',
    'shell': 'bash',
    'sh': 'bash',
    'markdown': 'markdown',
    'md': 'markdown'
  };

  static highlight(code: string, options: HighlightOptions): string {
    const { language, showLineNumbers = false, highlightLines = [] } = options;
    
    // Get the correct Prism language identifier
    const prismLanguage = this.languageMap[language.toLowerCase()] || 'javascript';
    
    // Check if the language is supported
    if (!Prism.languages[prismLanguage]) {
      console.warn(`Language '${prismLanguage}' is not supported by Prism.js`);
      return this.escapeHtml(code);
    }

    try {
      // Format the code first
      const formattedCode = this.formatCode(code);
      
      // Highlight the code
      const highlightedCode = Prism.highlight(
        formattedCode, 
        Prism.languages[prismLanguage], 
        prismLanguage
      );

      // Add line numbers if requested
      if (showLineNumbers) {
        return this.addLineNumbers(highlightedCode, highlightLines);
      }

      return highlightedCode;
    } catch (error) {
      console.error('Error highlighting code:', error);
      return this.escapeHtml(code);
    }
  }

  private static formatCode(code: string): string {
    return code
      .split('\n')
      .map(line => line.trimEnd())
      .join('\n')
      .trim();
  }

  private static addLineNumbers(code: string, highlightLines: number[] = []): string {
    const lines = code.split('\n');
    
    return lines
      .map((line, index) => {
        const lineNumber = index + 1;
        const isHighlighted = highlightLines.includes(lineNumber);
        const highlightClass = isHighlighted ? 'bg-yellow-200 bg-opacity-20' : '';
        
        return `<span class="line-number ${highlightClass}" data-line="${lineNumber}">${line}</span>`;
      })
      .join('\n');
  }

  private static escapeHtml(text: string): string {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
  }

  static getSupportedLanguages(): string[] {
    return Object.keys(this.languageMap);
  }

  static isLanguageSupported(language: string): boolean {
    const prismLanguage = this.languageMap[language.toLowerCase()];
    return !!prismLanguage && !!Prism.languages[prismLanguage];
  }
}