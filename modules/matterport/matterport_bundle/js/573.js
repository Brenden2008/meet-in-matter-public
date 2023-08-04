/*! For license information please see 573.js.LICENSE.txt */
"use strict";(self.webpackChunkmp_webgl=self.webpackChunkmp_webgl||[]).push([[573],{55721:(e,i,t)=>{var r;t.d(i,{Z:()=>o}),function(e){e[e.None=0]="None",e[e.Queued=1]="Queued",e[e.ForceQueued=2]="ForceQueued",e[e.Downloading=3]="Downloading",e[e.Downloaded=4]="Downloaded",e[e.DownloadFailed=5]="DownloadFailed"}(r||(r={}));const o=r},88338:(e,i,t)=>{t.d(i,{E:()=>r});const r={longerTransitionMaxDist:10,TRANSITION_TIME_DH:650}},20043:(e,i,t)=>{t.d(i,{Tq:()=>n,bG:()=>u});var r=t(98169),o=t(81248),s=t(88338);const n=(e,i,t,r,...o)=>a({sweepData:e,direction:i,directionFactor:t,sourceSweep:r,ignoreSweeps:o}),a=e=>{const{sweepData:i,direction:t,sourceSweep:s,ignoreSweeps:n,directionFactor:a}=e;if(!i.currentSweepObject)return[];const u=s||i.currentSweepObject,c=[r.ff(u),r._k(),r.vO(u),r.pI(u.position,t,a)];for(const e of n)c.push(r.ff(e));const p=[o.o7(u.position,t),o.TE(u.position)],h=i.getSweepNeighbours(u);return i.sortByScore(c,p,h)},u=(e,i,t,n)=>{const a=[r._k(),r._T()],u=[o.Dv(t.point)],c=e.currentSweepObject;i&&c&&a.push(r.ff(c),r.SF(c.position,s.E.longerTransitionMaxDist),r.vO(c)),t.face&&a.push(r.D5(t.point,t.face.normal));const p=n.floorIdFromObject(t.object);p&&u.push(o.Bv(p));const h=e.sortByScore(a,u);if(0===h.length){const i=e.getClosestSweep(t.point,!0);h.push({sweep:i,score:0})}return h}},20573:(e,i,t)=>{t.d(i,{I:()=>V,a:()=>D});var r,o=t(81396),s=t(55721),n=t(31362),a=t(37082),u=t(54730),c=t(90304),p=t(20043),h=t(76609),l=t(98169),w=t(81248),S=t(95882);!function(e){e[e.CurrentView=0]="CurrentView",e[e.FullPanorama=1]="FullPanorama"}(r||(r={}));var d=t(27646),f=t(55084),g=t(71239);var y;!function(e){e[e.None=0]="None",e[e.DirectionalFOV=1]="DirectionalFOV"}(y||(y={}));class D{constructor(e,i,t,r){this.panoQualityManager=e,this.tilingSettings=i,this.sweepData=t,this.raycaster=r,this.directionalFOV=120,this.tempQueue=[],this.filterAndPrioritize=(e,i,t)=>{if(!this.priorityCriteria.sweep)return;const r=void 0!==this.priorityCriteria.upcomingSweeps&&null!==this.priorityCriteria.upcomingSweeps,o=this.tempQueue;o.length=0,this.queueTilesForPano(o,t,this.priorityCriteria.sweep,h.AB.BASE);const s=A(e,o,!0);this.currViewQueue[h.SL.BASE].value=s,this.fullPanoQueue[h.SL.BASE].value=s,r?this.queueForRestrictedSweeps(e,t):this.priorityCriteria.viewMode!==S.Ey.Panorama?this.queueForNonPanoViewmode(e,t):this.queueForPanoViewmode(e,i,t),this.tilingSettings.downloadFullPano&&this.queueFullPano(e,t)},this.queueRaycast=(()=>{const e=new o.Vector3;return(i,t)=>{if(this.priorityCriteria.sweep)if(this.priorityCriteria.hoveredSweep)this.queueTilesForPano(i,t,this.priorityCriteria.hoveredSweep,h.AB.BASE);else if(this.raycaster&&this.raycaster.hit){const r=e.copy(this.raycaster.hit.point).sub(this.priorityCriteria.sweep.position),o=this.getSinglePanoInDirection(r),s=this.sweepData.getSweep(o);s&&this.queueTilesForPano(i,t,s,h.AB.BASE)}}})(),this.queueRaycastIntersection=(e,i)=>{if(!this.raycaster||!this.raycaster.hit||!this.meshQuery)return;const t=(0,p.bG)(this.sweepData,!1,this.raycaster.hit.intersection,this.meshQuery),r=t.length>0?t[0].sweep:this.sweepData.getClosestSweep(this.raycaster.hit.point,!0);r&&this.queueTilesForPano(e,i,r,h.AB.BASE)},this.getSweepIdInLocalDirection=(()=>{const e=new o.Vector3;return i=>{const t=this.priorityCriteria.cameraRot,r=e.copy(i).applyQuaternion(t);return this.getSinglePanoInDirection(r)}})(),this.persistentStorage=new u.a,this.maxResolution=e.getNavPanoSize(),this.currViewQueue=C(),this.fullPanoQueue=C(),this.isMobileDevice=(0,n.tq)(),this.priorityCriteria=new V(null,new o.Vector3(0,0,0),new o.Vector3(0,0,-1))}getQualityQueueSize(e,i){return e===r.CurrentView?this.currViewQueue[i].value:this.fullPanoQueue[i].value}makeQueueSubscription(e,i,t){return(e===r.CurrentView?this.currViewQueue[i]:this.fullPanoQueue[i]).onChanged(t)}updateCriteria(e,i,t,r){this.priorityCriteria.sweep=e,this.priorityCriteria.cameraPosition.copy(i),this.priorityCriteria.cameraDir.copy(t),this.priorityCriteria.cameraRot.copy(r)}setHoveredSweep(e){this.priorityCriteria.hoveredSweep=e}setUpcomingSweeps(e){this.priorityCriteria.upcomingSweeps=e}clearUpcomingSweeps(){this.priorityCriteria.upcomingSweeps=void 0}setDownloadFOV(e){this.directionalFOV=e}queueForRestrictedSweeps(e,i){if(!this.priorityCriteria.upcomingSweeps)return;let t=0;for(const r of this.priorityCriteria.upcomingSweeps)if(t++,this.queueTilesForPano(e,i,r,h.AB.BASE),t>=3)break;this.queueFOVStandardNarrow(e,i),this.queueFOVHighNarrow(e,i)}queueForPanoViewmode(e,i,t){this.queueRaycast(e,t),this.queueFOVStandardNarrow(e,t),this.queueScoredSweeps(e,i,t),this.queueFOVHighNarrow(e,t),this.isMobileDevice||this.queueWASD(e,i,t)}queueForNonPanoViewmode(e,i){this.queueRaycastIntersection(e,i)}queueFOVTiles(e,i,t,r){if(!this.priorityCriteria.sweep)return 0;const o=h.eE[i];return this.canDownloadSize(this.priorityCriteria.sweep,i)?this.queueTilesInDirectionForPano(e,r,this.priorityCriteria.sweep,o,this.priorityCriteria.cameraDir,t):0}queueScoredSweeps(e,i,t){if(this.priorityCriteria.sweep&&this.maxResolution<=2048){const r=this.persistentStorage.getArray("filterAndPrioritize:scoredSweeps");this.populateScoredSweeps(this.priorityCriteria.sweep,i,r,this.priorityCriteria.cameraDir,6),this.queueTilesForPanos(e,r,t,h.AB.BASE,4)}}queueFOVStandardNarrow(e,i){if(!this.priorityCriteria.sweep)return;const t=this.tempQueue;t.length=0;const r=this.queueFOVTiles(t,h.SL.STANDARD,this.directionalFOV,i);this.sortTiles(t,this.priorityCriteria.sweep,this.priorityCriteria.cameraDir),A(e,t),this.currViewQueue[h.SL.STANDARD].value=r,this.fullPanoQueue[h.SL.STANDARD].value=r}queueFOVHighNarrow(e,i){if(!this.priorityCriteria.sweep)return;const t=this.tempQueue;t.length=0;const r=this.queueFOVTiles(t,h.SL.HIGH,this.directionalFOV,i),o=this.queueFOVTiles(t,h.SL.ULTRAHIGH,this.directionalFOV,i);this.sortTiles(t,this.priorityCriteria.sweep,this.priorityCriteria.cameraDir),A(e,t),this.currViewQueue[h.SL.HIGH].value=r,this.currViewQueue[h.SL.ULTRAHIGH].value=o}queueFullPano(e,i){if(!this.priorityCriteria.sweep)return;const t=this.tempQueue;if(t.length=0,this.maxResolution<=h.AB.HIGH){if(this.canDownloadSize(this.priorityCriteria.sweep,h.SL.HIGH)){const e=this.queueTilesForPano(t,i,this.priorityCriteria.sweep,h.AB.HIGH);this.fullPanoQueue[h.SL.HIGH].value=e}}else if(this.canDownloadSize(this.priorityCriteria.sweep,h.SL.ULTRAHIGH)){const e=this.queueTilesForPano(t,i,this.priorityCriteria.sweep,h.AB.ULTRAHIGH);this.fullPanoQueue[h.SL.ULTRAHIGH].value=e}this.sortTiles(t,this.priorityCriteria.sweep,this.priorityCriteria.cameraDir),A(e,t,!0)}queueWASD(e,i,t){const r=this.persistentStorage.getArray("filterAndPrioritize:neighbors")||[];if(r.length=0,!this.priorityCriteria.sweep)return;const o=[c.f.FORWARD,c.f.RIGHT,c.f.LEFT,c.f.BACK];for(const e of o){const t=this.getSweepIdInLocalDirection(e),o=i.get(t);o&&r.push(o)}this.queueTilesForPanos(e,r,t,h.AB.BASE)}canDownloadSize(e,i){const t=h.eE[i],r=this.panoQualityManager.getNavPanoSize()>=t||this.maxResolution>=t&&this.panoQualityManager.getZoomPanoSize()>=t,o=this.panoQualityManager.getTestResults(e.id,i);return r&&o===d.S.Untested&&this.panoQualityManager.testDownload(e,i,f.I_),o===d.S.Success&&r}populateScoredSweeps(e,i,t,r,s){(t=t||[]).length=0;const n=(new o.Vector3).copy(e.position),a=[l._k(),l.ff(e),l.jN(n,400),l.pI(n,r,.75)],u=[w.Dv(n,g.Xd.navigation.distanceFactor),w.o7(n,r,g.Xd.navigation.directionFactor)],c=this.sweepData.getSweepNeighbours(e),p=this.sweepData.sortByScore(a,u,c);for(let e=0;e<p.length&&e<s;e++){const i=p[e].sweep;t.push(i)}}queueTilesForPanos(e,i,t,r,o){let s=0;for(const n of i){if(s+=this.queueTilesForPano(e,t,n,r)>0?1:0,o&&s>=o)break}return s}queueTilesForPano(e,i,t,r){const o=this.persistentStorage.get("queueTilesForSweep:filterCriteria",(()=>({filter:y.None})));return this.filterAndQueueTileDownloadDescriptors(e,i,t,r,o)}queueTilesInDirectionForPano(e,i,t,r,s,n){const a=this.persistentStorage.get("queueTilesInDirectionForSweep:panoSpaceDir",(()=>new o.Vector3)),u=this.persistentStorage.get("queueTilesInDirectionForSweep:filterCriteria",(()=>({filter:y.DirectionalFOV,direction:new o.Vector3,fov:60})));return a.copy(s),f.ym(t.rotation,a),u.direction.copy(a),u.fov=n,this.filterAndQueueTileDownloadDescriptors(e,i,t,r,u)}filterAndQueueTileDownloadDescriptors(e,i,t,r,o){const s=this.persistentStorage.getArray("filterAndQueueTileDownloadDescriptors:descriptors"),n=i.getTileDownloadDescriptors(t,r);s.length=0,this.filterTileDownloadDescriptors(n,s,o);let a=0;for(const i of s)i&&(e.push(i),a++);return a}filterTileDownloadDescriptors(e,i,t){let r,o;switch(t.filter){case y.DirectionalFOV:for(r=0;r<e.length;r++)o=e[r],o&&f.eO(o.panoSize,o.tileSize,o.face,o.tileX,o.tileY,t.direction,t.fov)&&i.push(o);break;default:for(r=0;r<e.length;r++)o=e[r],i.push(o)}for(r=0;r<i.length;r++)o=i[r],o&&!this.canIncludeDescriptor(o)&&(i[r]=null)}canIncludeDescriptor(e){return e.status!==s.Z.Downloading&&e.status!==s.Z.Downloaded}sortTiles(e,i,t){F.panoSpaceDir.copy(t),f.ym(i.rotation,F.panoSpaceDir),F.fovThresholdNarrow=m(this.directionalFOV),e.sort(T)}insertSortedPanoTile(e,i,t,r){F.panoSpaceDir.copy(r),f.ym(t.rotation,F.panoSpaceDir),F.fovThresholdNarrow=m(this.directionalFOV);let o=-1;for(let t=0;t<e.length;t++){if(T(i,e[t])<=0){o=t;break}}if(-1===o)e[e.length]=i;else{for(let i=e.length;i>o;i--)e[i]=e[i-1];e[o]=i}}getSinglePanoInDirection(e){const i=this.priorityCriteria.sweep;if(!i)return"";const t=[l.ff(i),l._k(),l.pI(i.position,e)],r=[w.o7(i.position,e),w.TE(i.position)],o=i.neighbours.filter((e=>{const i=this.sweepData.getSweep(e);return t.every((e=>e(i)))})).map((e=>{const i=this.sweepData.getSweep(e);return{sweepId:e,score:r.reduce(((e,t)=>e+t(i)),0)}})),s=o.reduce(((e,i)=>e.score>i.score?e:i),o[0]);return s?s.sweepId:""}}const F={panoSpaceDir:new o.Vector3,fovThresholdNarrow:-1},T=(e,i)=>{const t=F.panoSpaceDir,r=F.fovThresholdNarrow,o=Math.max(Math.min(t.dot(e.direction),1),-1),s=Math.max(Math.min(t.dot(i.direction),1),-1);return o>=r&&s<r?-1:o<r&&s>=r||e.panoSize>i.panoSize?1:i.panoSize>e.panoSize?-1:-(o-s)};function C(){return{[h.SL.BASE]:(0,a.Y)(0),[h.SL.STANDARD]:(0,a.Y)(0),[h.SL.HIGH]:(0,a.Y)(0),[h.SL.ULTRAHIGH]:(0,a.Y)(0)}}function m(e){return Math.cos(Math.PI/180*(e/2))}function A(e,i,t=!1){let r=0;if(e&&i)for(const o of i)t&&-1!==e.indexOf(o)||(e.push(o),r++);return r}class V{constructor(e,i,t,r){this.cameraRot=new o.Quaternion,this.sweep=e,this.cameraPosition=(new o.Vector3).copy(i),this.cameraDir=(new o.Vector3).copy(t),this.upcomingSweeps=r,this.zoomingActive=!1}}}}]);