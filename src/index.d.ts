import React from 'react'
import JSONEditor, { JSONEditorOptions } from 'jsoneditor'

export interface IReactJsoneditorProps {
    values: Object
}

export default class ReactJsoneditor extends React.Component<IReactJsoneditorProps> {
    private editor?: JSONEditor
    private options?: JSONEditorOptions
}
