package org.ccim.wenli;


import org.apache.cordova.Config;
import org.apache.cordova.CordovaActivity;
import android.os.Bundle;

public class ReadActivity extends CordovaActivity {
    
    @Override
    public void onCreate(Bundle savedInstanceState)
    {
        super.onCreate(savedInstanceState);
        super.init();
              
        super.loadUrl(Config.getStartUrl());
    }

}
