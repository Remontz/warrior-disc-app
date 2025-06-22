import React from 'react';
import ToolbarHUD from './ToolbarHUD';
import FieldContainer from './FieldContainer';
import OverlayControls from './OverlayControls';
import TeamSheetPanel from './TeamSheetPanel'

export default function GameSection() {
    return (
        <div className = "game-section" style = {{display: 'flex', flexDirection: 'row', height: '80vh'}}>
            <ToolbarHUD />

            <div style = {{flexGrow: 1, position: 'relative'}}>
                <FieldContainer />
                <OverlayControls />
            </div>

            <TeamSheetPanel />
        </div>
    );
}