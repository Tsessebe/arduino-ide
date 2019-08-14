import { inject, injectable } from 'inversify';
import { Library, LibraryService } from '../../common/protocol/library-service';
import { ListWidget } from '../components/component-list/list-widget';
import { LibraryItemRenderer } from './library-item-renderer';

@injectable()
export class LibraryListWidget extends ListWidget<Library> {

    static WIDGET_ID = 'library-list-widget';
    static WIDGET_LABEL = 'Library Manager';

    constructor(
        @inject(LibraryService) protected service: LibraryService,
        @inject(LibraryItemRenderer) protected itemRenderer: LibraryItemRenderer) {

        super({
            id: LibraryListWidget.WIDGET_ID,
            label: LibraryListWidget.WIDGET_LABEL,
            iconClass: 'library-tab-icon',
            searchable: service,
            installable: service,
            itemLabel: (item: Library) => item.name,
            itemRenderer
        });
    }

}
