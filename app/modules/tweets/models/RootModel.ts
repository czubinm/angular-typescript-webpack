import {ISharedModel, IContentModel, ISidebarModel, ITopbarModel, IRootModel} from "./Interfaces";

export class RootModel implements IRootModel {
    public static $inject: Array<string> = ["ITopbarModel", "ISharedModel", "IContentModel", "ISidebarModel"];
    private _sharedModel: ISharedModel;
    private _sidebarModel: ISidebarModel;
    private _topbarModel: ITopbarModel;
    private _contentModel: IContentModel;

    public get sharedModel(): ISharedModel {
        return this._sharedModel;
    }

    public get sidebarModel(): ISidebarModel {
        return this._sidebarModel;
    }

    public get topbarModel(): ITopbarModel {
        return this._topbarModel;
    }

    public get contentModel(): IContentModel {
        return this._contentModel;
    }

    constructor(topbarModel: ITopbarModel,
                sharedModel: ISharedModel,
                contentModel: IContentModel,
                sidebarModel: ISidebarModel) {
        this._sharedModel = sharedModel;
        this._topbarModel = topbarModel;
        this._contentModel = contentModel;
        this._sidebarModel = sidebarModel;
    }
}