define([],
function () {
    'use strict';

    return  {
        NODE_UI_DISPLAY: 1,
        NODE_ALTER: 2,
        NODE_CONDITIONAL: 3,
        NODE_RESTRICTIONS: 4,
        NODE_LINK: 5,
        NODE_LINK_TARGET: 6,
        LOCALE_PREFIX: 'YANGUI_FORM_',
        EV_SRC_MAIN: 'EV_SRC_MAIN',
        EV_FILL_PATH: 'EV_FILL_PATH',
        EV_LIST_CHANGED: 'EV_LIST_CHANGED',
        EV_PARAM_EDIT_SUCC: 'EV_PARAM_EDIT_SUCC',
        MPPREFIX: 'yang-ext:mount',
        NULL_DATA: null,
        ADVANCED_FILTERING_TYPES: {
            'number': ['=', '>', '>=', '<', '<=', 'range'],
            'string': ['=', 'contains', 'regExp'],
        },
        ALLOWED_LEAF_TYPES_FOR_FILTER: ['string', 'uint32', 'uint8', 'decimal64', 'int16', 'int32', 'int64', 'int8',
                                        'uint16', 'uint64', 'union', 'bits', 'leafref', 'identityref'],
        ALLOWED_NODE_TYPES_FOR_FILTER: ['case', 'choice', 'container', 'input', 'leaf', 'output', 'rpc'],
        DISPLAY_TYPE_REQ_DATA: 'req-data',
        DISPLAY_TYPE_FORM: 'form',
        DATA_STORE_CONFIG: 'config',
        DATA_STORE_OPERATIONAL: 'operational',
        NODE_RPC: 'rpc',
        OPERATION_GET: 'GET',
        OPERATION_PUT: 'PUT',
        OPERATION_DELETE: 'DELETE',
        OPERATION_POST: 'POST',
        REQUEST_DATA_TYPE_RECEIVED: 'RECEIVED',
        ICON_EXPAND_ADD: 'add',
        ICON_COLLAPSE_REMOVE: 'remove',
        ICON_KEYBOARD_ARROW_RIGHT: 'keyboard_arrow_right',
        EXPAND_LEVEL_THREE: '3',
        COLLECTION_CHECK_ARRAY: ['sentData', 'receivedData', 'path', 'collection', 'method', 'status', 'name'],
        EV_REFRESH_LIST_INDEX: 'EV_REFRESH_LIST_INDEX',
        YANGMAN_DISABLE_ADDING_LIST_ELEMENT: 'YANGMAN_DISABLE_ADDING_LIST_ELEMENT',
        YANGMAN_MODULE_D_INIT: 'YANGMAN_MODULE_D_INIT',
        YANGMAN_GET_API_TREE_DATA: 'YANGMAN_GET_API_TREE_DATA',
        YANGMAN_SET_API_TREE_DATA: 'YANGMAN_SET_API_TREE_DATA',
        YANGMAN_SET_LOADING_BOX: 'YANGMAN_SET_LOADING_BOX',
        YANGMAN_SHOW_TOAST: 'YANGMAN_SHOW_TOAST',
        YANGMAN_SET_MODULE_LIST_TITLE: 'YANGMAN_SET_MODULE_LIST_TITLE',
        YANGMAN_SET_CODEMIRROR_DATA: 'YANGMAN_SET_CODEMIRROR_DATA_',
        YANGMAN_GET_CODEMIRROR_DATA: 'YANGMAN_GET_CODEMIRROR_DATA_',
        SET_SEL_OPERATIONS: 'SET_SEL_OPERATIONS',
        YANGMAN_HEADER_INIT: 'YANGMAN_HEADER_INIT',
        YANGMAN_FILL_NODE_FROM_REQ: 'YANGMAN_FILL_NODE_FROM_REQ',
        YANGMAN_EXECUTE_WITH_DATA: 'YANGMAN_EXECUTE_WITH_DATA',
        YANGMAN_DESELECT_REQUESTS: 'YANGMAN_DESELECT_REQUESTS',
        YANGMAN_REFRESH_COLLECTIONS: 'YANGMAN_REFRESH_COLLECTIONS',
        YANGMAN_REFRESH_HISTORY: 'YANGMAN_REFRESH_HISTORY',
        YANGMAN_SAVE_EXECUTED_REQUEST: 'YANGMAN_SAVE_EXECUTED_REQUEST',
        YANGMAN_SELECT_THE_NEWEST_REQUEST: 'YANGMAN_SELECT_THE_NEWEST_REQUEST',
        YANGMAN_SAVE_REQUEST_TO_COLLECTION: 'YANGMAN_SAVE_REQUEST_TO_COLLECTION',
        YANGMAN_REFRESH_AND_EXPAND_COLLECTIONS: 'YANGMAN_REFRESH_AND_EXPAND_COLLECTIONS',
        YANGMAN_SET_ERROR_DATA: 'YANGMAN_SET_ERROR_DATA',
        YANGMAN_SET_ERROR_MESSAGE: 'YANGMAN_SET_ERROR_MESSAGE',
        YANGMAN_EXECUTING_REQUEST_PROGRESS_START: 'YANGMAN_EXECUTING_REQUEST_PROGRESS_START',
        YANGMAN_EXECUTING_REQUEST_PROGRESS_STOP: 'YANGMAN_EXECUTING_REQUEST_PROGRESS_STOP',
        YANGMAN_GET_CODEMIRROR_DATA_RECEIVED: 'YANGMAN_GET_CODEMIRROR_DATA_RECEIVED',
        YANGMAN_GET_CODEMIRROR_DATA_SENT: 'YANGMAN_GET_CODEMIRROR_DATA_SENT',
        YANGMAN_SET_CODEMIRROR_DATA_RECEIVED: 'YANGMAN_SET_CODEMIRROR_DATA_RECEIVED',
        YANGMAN_SET_CODEMIRROR_DATA_SENT: 'YANGMAN_SET_CODEMIRROR_DATA_SENT',
        YANGMAN_ERROR_EMPTY_IDENTIFIERS: 'YANGMAN_ERROR_EMPTY_IDENTIFIERS',
        YANGMAN_NO_MOUNT_POINT: 'YANGMAN_NO_MOUNT_POINT',
        YANGMAN_CUST_MOUNT_POINTS: 'YANGMAN_CUST_MOUNT_POINTS',
        YANGMAN_CANCEL_MP: 'YANGMAN_CANCEL_MP',
        YANGMAN_MOUNT_POINT: 'YANGMAN_MOUNT_POINT',
        SET_SCOPE_TREE_ROWS: 'SET_SCOPE_TREE_ROWS',
        TREE_ROWS: 'tree_rows',
    };

});
