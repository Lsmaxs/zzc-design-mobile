export interface DatePickerProps {
    prefixCls?: string
    className?: string
    style?: React.CSSProperties
    onChange?: Function
    mode?: 'date' | 'time' | 'datetime' | 'year' | 'month'
    minDate?: string
    maxDate?: string
    selectTime?: any
    lang?: 'cn' | 'hk' | 'en'
    minuteStep?: number
    use12hour?: boolean
    onValueChange?: Function
    onClose?: Function
    onSubmit?: Function
    renderCallback?: Function
    visible: boolean
    maskClose?: boolean
}

export interface DatePickerState {
    yearList: ListItem | any
    monthList: ListItem | any
    dayList: ListItem | any
    hourList: ListItem | any
    minuteList: ListItem | any
    hour12List: ListItem | any
    langData: any
}

export declare type ListItem = {
    className: string
    itemClassName: string
    selectIndex: number
    scrollType: string
    listData: Array<ListData>
};

export declare type ListData = {
    text: string | number
    dataKey: string | number
};

export declare type BScrollArray = {
    year?: any
    month?: any
    day?: any
    hour?: any
    minute?: any
    hour12?: any
};