/**
 * Created with JetBrains WebStorm.
 * User: tafeng.dxx
 * Date: 13-1-26
 * Time: 下午5:39
 */
Ext.define('AM.controller.Users', {
    extend:'Ext.app.Controller',

    views:[
        'user.List',
        'user.Edit'
    ],
    stores:[
        'Users'
    ],
    models:['User'],

    init:function () {
        this.control({
            'viewport userlist':{
                itemdblclick:this.editUser
            },
            'useredit button[action=save]':{
                click:this.updateUser
            }
        });
    },
    updateUser:function (button) {
        var win = button.up('window'),
            form = win.down('form'),
            record = form.getRecord(),
            values = form.getValues();

        record.set(values);
        win.close();
        this.getUsersStore().sync();
    },

    editUser:function (grid, record) {
        var view = Ext.widget('useredit');

        view.down('form').loadRecord(record);
    }
});