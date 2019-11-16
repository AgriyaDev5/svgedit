var svgEditorLang_et = (function () {
  'use strict';

  var lang_et = {
    lang: 'et',
    dir: 'ltr',
    common: {
      ok: 'Salvestama',
      cancel: 'Tühista',
      key_backspace: 'backspace',
      key_del: 'delete',
      key_down: 'down',
      key_up: 'up',
      more_opts: 'More Options',
      url: 'URL',
      width: 'Width',
      height: 'Height'
    },
    misc: {
      powered_by: 'Powered by'
    },
    ui: {
      toggle_stroke_tools: 'Show/hide more stroke tools',
      palette_info: 'Click muuta täitke värvi, Shift-nuppu, et muuta insult värvi',
      zoom_level: 'Muuda suumi taset',
      panel_drag: 'Drag left/right to resize side panel',
      quality: 'Quality:',
      pathNodeTooltip: 'Drag node to move it. Double-click node to change segment type',
      pathCtrlPtTooltip: 'Drag control point to adjust curve properties',
      pick_stroke_paint_opacity: 'Pick a Stroke Paint and Opacity',
      pick_fill_paint_opacity: 'Pick a Fill Paint and Opacity'
    },
    properties: {
      id: 'Identify the element',
      fill_color: 'Muuda täitke värvi',
      stroke_color: 'Muuda insult värvi',
      stroke_style: 'Muuda insult kriips stiil',
      stroke_width: 'Muuda insult laius',
      pos_x: 'Change X coordinate',
      pos_y: 'Change Y coordinate',
      linecap_butt: 'Linecap: Butt',
      linecap_round: 'Linecap: Round',
      linecap_square: 'Linecap: Square',
      linejoin_bevel: 'Linejoin: Bevel',
      linejoin_miter: 'Linejoin: Miter',
      linejoin_round: 'Linejoin: Round',
      angle: 'Muuda Pöördenurk',
      blur: 'Change gaussian blur value',
      opacity: 'Muuda valitud elemendi läbipaistmatus',
      circle_cx: 'Muuda ringi&#39;s cx kooskõlastada',
      circle_cy: 'Muuda ringi&#39;s cy kooskõlastada',
      circle_r: 'Muuda ring on raadiusega',
      ellipse_cx: 'Muuda ellips&#39;s cx kooskõlastada',
      ellipse_cy: 'Muuda ellips&#39;s cy kooskõlastada',
      ellipse_rx: 'Muuda ellips&#39;s x raadius',
      ellipse_ry: 'Muuda ellips&#39;s y raadius',
      line_x1: 'Muuda rööbastee algab x-koordinaadi',
      line_x2: 'Muuda Line lõpeb x-koordinaadi',
      line_y1: 'Muuda rööbastee algab y-koordinaadi',
      line_y2: 'Muuda Line lõppenud y-koordinaadi',
      rect_height: 'Muuda ristküliku kõrgus',
      rect_width: 'Muuda ristküliku laius',
      corner_radius: 'Muuda ristkülik Nurgakabe Raadius',
      image_width: 'Muuda pilt laius',
      image_height: 'Muuda pilt kõrgus',
      image_url: 'Change URL',
      node_x: "Change node's x coordinate",
      node_y: "Change node's y coordinate",
      seg_type: 'Change Segment type',
      straight_segments: 'Straight',
      curve_segments: 'Curve',
      text_contents: 'Muuda teksti sisu',
      font_family: 'Muutke Kirjasinperhe',
      font_size: 'Change font size',
      bold: 'Rasvane kiri',
      italic: 'Kursiiv'
    },
    tools: {
      main_menu: 'Main Menu',
      bkgnd_color_opac: 'Muuda tausta värvi / läbipaistmatus',
      connector_no_arrow: 'No arrow',
      fitToContent: 'Fit to Content',
      fit_to_all: 'Sobita kogu sisu',
      fit_to_canvas: 'Sobita lõuend',
      fit_to_layer_content: 'Sobita kiht sisu',
      fit_to_sel: 'Fit valiku',
      align_relative_to: 'Viia võrreldes ...',
      relativeTo: 'võrreldes:',
      page: 'lehekülg',
      largest_object: 'suurim objekt',
      selected_objects: 'valitud objektide',
      smallest_object: 'väikseim objekt',
      new_doc: 'Uus pilt',
      open_doc: 'Pildi avamine',
      export_img: 'Export',
      save_doc: 'Salvesta pilt',
      import_doc: 'Import Image',
      align_to_page: 'Align Element to Page',
      align_bottom: 'Viia Bottom',
      align_center: 'Keskele joondamine',
      align_left: 'Vasakjoondus',
      align_middle: 'Viia Lähis -',
      align_right: 'Paremjoondus',
      align_top: 'Viia Üles',
      mode_select: 'Vali Tool',
      mode_fhpath: 'Pencil Tool',
      mode_line: 'Line Tool',
      mode_rect: 'Rectangle Tool',
      mode_square: 'Square Tool',
      mode_fhrect: 'Online-Hand Ristkülik',
      mode_ellipse: 'Ellips',
      mode_circle: 'Circle',
      mode_fhellipse: 'Online-Hand Ellips',
      mode_path: 'Path Tool',
      mode_text: 'Tekst Tool',
      mode_image: 'Pilt Tool',
      mode_zoom: 'Zoom Tool',
      no_embed: 'NOTE: This image cannot be embedded. It will depend on this path to be displayed',
      undo: 'Undo',
      redo: 'Redo',
      tool_source: 'Muuda Allikas',
      wireframe_mode: 'Wireframe Mode',
      clone: 'Clone Element(s)',
      del: 'Delete Element(s)',
      group_elements: 'Rühma elemendid',
      make_link: 'Make (hyper)link',
      set_link_url: 'Set link URL (leave empty to remove)',
      to_path: 'Convert to Path',
      reorient_path: 'Reorient path',
      ungroup: 'Lõhu Elements',
      docprops: 'Dokumendi omadused',
      move_bottom: 'Liiguta alla',
      move_top: 'Liiguta üles',
      node_clone: 'Clone Node',
      node_delete: 'Delete Node',
      node_link: 'Link Control Points',
      add_subpath: 'Add sub-path',
      openclose_path: 'Open/close sub-path',
      source_save: 'Salvestama',
      cut: 'Cut',
      copy: 'Copy',
      paste: 'Paste',
      paste_in_place: 'Paste in Place',
      delete: 'Delete',
      group: 'Group',
      move_front: 'Bring to Front',
      move_up: 'Bring Forward',
      move_down: 'Send Backward',
      move_back: 'Send to Back'
    },
    layers: {
      layer: 'Layer',
      layers: 'Layers',
      del: 'Kustuta Kiht',
      move_down: 'Liiguta kiht alla',
      new: 'Uus kiht',
      rename: 'Nimeta kiht',
      move_up: 'Liiguta kiht üles',
      dupe: 'Duplicate Layer',
      merge_down: 'Merge Down',
      merge_all: 'Merge All',
      move_elems_to: 'Move elements to:',
      move_selected: 'Move selected elements to a different layer'
    },
    config: {
      image_props: 'Image Properties',
      doc_title: 'Title',
      doc_dims: 'Canvas Dimensions',
      included_images: 'Included Images',
      image_opt_embed: 'Embed data (local files)',
      image_opt_ref: 'Use file reference',
      editor_prefs: 'Editor Preferences',
      icon_size: 'Icon size',
      language: 'Language',
      background: 'Editor Background',
      editor_img_url: 'Image URL',
      editor_bg_note: 'Note: Background will not be saved with image.',
      icon_large: 'Large',
      icon_medium: 'Medium',
      icon_small: 'Small',
      icon_xlarge: 'Extra Large',
      select_predefined: 'Valige eelmääratletud:',
      units_and_rulers: 'Units & Rulers',
      show_rulers: 'Show rulers',
      base_unit: 'Base Unit:',
      grid: 'Grid',
      snapping_onoff: 'Snapping on/off',
      snapping_stepsize: 'Snapping Step-Size:',
      grid_color: 'Grid color'
    },
    notification: {
      invalidAttrValGiven: 'Invalid value given',
      noContentToFitTo: 'No content to fit to',
      dupeLayerName: 'There is already a layer named that!',
      enterUniqueLayerName: 'Please enter a unique layer name',
      enterNewLayerName: 'Please enter the new layer name',
      layerHasThatName: 'Layer already has that name',
      QmoveElemsToLayer: "Move selected elements to layer '%s'?",
      QwantToClear: 'Do you want to clear the drawing?\nThis will also erase your undo history!',
      QwantToOpen: 'Do you want to open a new file?\nThis will also erase your undo history!',
      QerrorsRevertToSource: 'There were parsing errors in your SVG source.\nRevert back to original SVG source?',
      QignoreSourceChanges: 'Ignore changes made to SVG source?',
      featNotSupported: 'Feature not supported',
      enterNewImgURL: 'Enter the new image URL',
      defsFailOnSave: 'NOTE: Due to a bug in your browser, this image may appear wrong (missing gradients or elements). It will however appear correct once actually saved.',
      loadingImage: 'Loading image, please wait...',
      saveFromBrowser: "Select 'Save As...' in your browser (possibly via file menu or right-click context-menu) to save this image as a %s file.",
      noteTheseIssues: 'Also note the following issues: ',
      unsavedChanges: 'There are unsaved changes.',
      enterNewLinkURL: 'Enter the new hyperlink URL',
      errorLoadingSVG: 'Error: Unable to load SVG data',
      URLLoadFail: 'Unable to load from URL',
      retrieving: "Retrieving '%s' ...",
      popupWindowBlocked: 'Popup window may be blocked by browser',
      exportNoBlur: 'Blurred elements will appear as un-blurred',
      exportNoforeignObject: 'foreignObject elements will not appear',
      exportNoDashArray: 'Strokes will appear filled',
      exportNoText: 'Text may not appear as expected'
    }
  };

  return lang_et;

}());