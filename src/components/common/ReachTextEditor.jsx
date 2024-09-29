import {
    BtnBold,
    BtnBulletList,
    BtnClearFormatting,
    BtnItalic,
    BtnLink,
    BtnNumberedList,
    BtnRedo,
    BtnStrikeThrough,
    BtnStyles,
    BtnUnderline,
    BtnUndo,
    createButton,
    Editor,
    EditorProvider,
    HtmlButton,
    Separator,
    Toolbar
} from 'react-simple-wysiwyg';

const BtnAlignCenter = createButton('Align center', '≡', 'justifyCenter');

export default function ReachTextEditor({ value, onChange, ref }) {

    return (
        <EditorProvider>
            <Editor value={value} onChange={onChange} ref={ref}>
                <Toolbar>
                    <BtnBold />
                    <BtnUndo />
                    <BtnRedo />
                    <BtnItalic />
                    <BtnUnderline />
                    <BtnAlignCenter />
                    <BtnStrikeThrough />
                    <Separator />
                    <BtnNumberedList />
                    <BtnBulletList />
                    <Separator />
                    <BtnLink />
                    <BtnClearFormatting />
                    <HtmlButton />
                    <Separator />
                    <BtnStyles />
                </Toolbar>
            </Editor>
        </EditorProvider>
    );
}