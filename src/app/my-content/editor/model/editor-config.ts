export class EditorConfig {
    public width = '100%';
    public height = '400';
    public path = '../../../../assets/editor.md/lib/';
    public codeFold: true;
    public searchReplace = true;
    public toolbar = true;
    public emoji = true;
    public taskList = true;
    public tex = true;
    public readOnly = false;
    public tocm = true;
    public watch = true;
    public previewCodeHighlight = true;
    public saveHTMLToTextarea = true;
    public markdown = '';
    public flowChart = true;
    public syncScrolling = true;
    public sequenceDiagram = true;
    /**图片上传**/
    public imageUpload = true;
    public crossDomainUpload =true;/**是否跨域上传**/
    public imageFormats = ['jpg', 'jpeg', 'gif', 'png', 'bmp', 'webp'];
    public imageUploadURL = 'http://192.168.10.13:3000/api/file';
    uploadCallbackURL= "http://127.0.0.1:4200/upload";//这里是本机的IP地址

    constructor() {

    }
}
