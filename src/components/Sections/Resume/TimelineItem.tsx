import {FC, memo} from 'react';

import {TimelineItem} from '../../../data/dataDef';

const TimelineItem: FC<{ item: TimelineItem }> = memo(({item}) => {
    const {title, date, location, content} = item;
    return (
        <div className="flex flex-col pb-4 text-center last:pb-0 md:text-left">
            <div className="flex flex-col pb-2">
                <h2 className="text-xl font-bold">{title}</h2>
                <div className="flex items-center justify-center gap-x-2 md:justify-start">
                    <span className="align-left flex-1 text-sm font-medium italic sm:flex-none">{location}</span>
                    <span>-</span>
                    <span className="flex-1 text-sm sm:flex-none">{date}</span>
                </div>
            </div>
            <p className="align-left">{content || ""}</p>
        </div>
    );
});

TimelineItem.displayName = 'TimelineItem';
export default TimelineItem;
