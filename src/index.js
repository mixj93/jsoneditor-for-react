import React from 'react'
import JSONEditor from 'jsoneditor'
import 'jsoneditor/dist/jsoneditor.min.css'

class ReactJsoneditor extends React.Component {
  constructor(props) {
    super(props)
  }

  componentWillReceiveProps(nextProps) {
    let editorValues = this.editor.get()
    if (
      JSON.stringify(this.props.values) !== JSON.stringify(nextProps.values) &&
      JSON.stringify(editorValues) !== JSON.stringify(nextProps.values)
    ) {
      this.editor.set(nextProps.values)
      this.editor.expandAll()
    }
  }

  componentDidMount() {
    this.options = {
      onChange: () => {
        if (this.props.onChange) {
          let newValues = this.editor.get()
          this.props.onChange(newValues)
        }
      }
    }
    this.editor = new JSONEditor(this.container, this.options)
    this.editor.set(this.props.values)
    this.editor.expandAll()
  }

  render() {
    return (
      <div className="react-json-editor-wrapper" ref={(el) => {this.container = el}} />
    )
  }
}

export default ReactJsoneditor;
