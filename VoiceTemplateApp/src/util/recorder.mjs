export default class Recorder {
  constructor() {
    this.audioType = "audio/webm;codecs=opus";
    this.MediaRecorder = {};

    this.recordedBlobs = [];
  }

  _setup() {
    const options = { mimeType: this.audioType };
    const isSupported = MediaRecorder.isTypeSupported(options.mimeType);
    if (!isSupported) {
      const msg = `the codec: ${options.mimeType} is not supported`;
      alert(msg);

      throw new Error(msg);
    }

    return options;
  }

  startRecording(stream) {
    const options = this._setup();
    this.MediaRecorder = new MediaRecorder(stream, options);
    this.MediaRecorder.onstop = (event) => {
      console.log("Recorded Blobs", this.recordedBlobs);
    };
    this.MediaRecorder.ondataavailable = (event) => {
      if (!event.data || !event.data.size) return;

      this.recordedBlobs.push(event.data);
    };
    this.MediaRecorder.start();
    console.log("Media recorder started", this.MediaRecorder);
  }
  async stopRecording() {
    if (this.MediaRecorder.state === "inactive") return;
    this.MediaRecorder.stop();
    console.log("media recorder stopped", this.MediaRecorder);
  }

  getRecordingURL() {
    const blob = new Blob(this.recordedBlobs, { type: this.audioType });
    return window.URL.createObjectURL(blob);
  }
}
